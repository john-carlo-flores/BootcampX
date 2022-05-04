const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});


pool.connect(() => {
  console.log('connected');
});

pool.query(`
SELECT DISTINCT cohorts.name as cohort_name, teachers.name as teacher_name
FROM teachers
JOIN assistance_requests ON teachers.id = assistance_requests.teacher_id
JOIN students ON students.id = assistance_requests.student_id
JOIN cohorts ON cohorts.id = students.cohort_id
WHERE cohorts.name LIKE '%${process.argv[2] || 'JUL02'}%'
ORDER BY teacher_name;
`)
.then(res => {
  res.rows.forEach(row => {
    console.log(`${row.cohort_name}: ${row.teacher_name}`);
  })
});