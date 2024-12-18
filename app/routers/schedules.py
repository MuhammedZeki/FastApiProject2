# app/routers/schedules.py
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List
from uuid import UUID

from .. import schemas, crud
from ..database import SessionLocal

router = APIRouter(
    prefix="/schedules",
    tags=["schedules"],
)

# Bağımlılık fonksiyonu
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/", response_model=schemas.Schedule, status_code=status.HTTP_201_CREATED)
def create_schedule(schedule: schemas.ScheduleCreate, db: Session = Depends(get_db)):
    # İlgili öğrenci ve öğretmenin varlığını kontrol et
    student = crud.get_student(db, schedule.student_id)
    if not student:
        raise HTTPException(status_code=404, detail="Student not found")
    
    teacher = crud.get_teacher(db, schedule.teacher_id)
    if not teacher:
        raise HTTPException(status_code=404, detail="Teacher not found")
    
    return crud.create_schedule(db=db, schedule=schedule)

@router.get("/{schedule_id}", response_model=schemas.Schedule)
def read_schedule(schedule_id: UUID, db: Session = Depends(get_db)):
    db_schedule = crud.get_schedule(db, schedule_id=schedule_id)
    if db_schedule is None:
        raise HTTPException(status_code=404, detail="Schedule not found")
    return db_schedule

@router.get("/", response_model=List[schemas.Schedule])
def read_schedules(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    schedules = crud.get_schedules(db, skip=skip, limit=limit)
    return schedules
