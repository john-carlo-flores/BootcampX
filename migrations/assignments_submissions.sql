CREATE TABLE assignments (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255),
  content TEXT,
  day INTEGER,
  chapter INTEGER,
  duration INTEGER
);

CREATE TABLE assigment_submissions (
  id SERIAL PRIMARY KEY NOT NULL,
  assigment_id INTEGER REFERENCES assignments(id) ON DELETE CASCADE,
  student_id INTEGER REFERENCES students(id) ON DELETE CASCADE,
  duration NUMERIC,
  submission_date DATE
);