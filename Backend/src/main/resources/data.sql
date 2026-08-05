-- skill master data
INSERT IGNORE INTO skill (skill_name) VALUES ('HTML');
INSERT IGNORE INTO skill (skill_name) VALUES ('CSS');
INSERT IGNORE INTO skill (skill_name) VALUES ('JavaScript');
INSERT IGNORE INTO skill (skill_name) VALUES ('React');
INSERT IGNORE INTO skill (skill_name) VALUES ('Java');
INSERT IGNORE INTO skill (skill_name) VALUES ('AWS');
INSERT IGNORE INTO skill (skill_name) VALUES ('Spring Boot');
INSERT IGNORE INTO skill (skill_name) VALUES ('MySQL');
INSERT IGNORE INTO skill (skill_name) VALUES ('SQL');
INSERT IGNORE INTO skill (skill_name) VALUES ('Git');
INSERT IGNORE INTO skill (skill_name) VALUES ('REST API');
INSERT IGNORE INTO skill (skill_name) VALUES ('Hibernate');
INSERT IGNORE INTO skill (skill_name) VALUES ('Docker');
INSERT IGNORE INTO skill (skill_name) VALUES ('Kubernetes');
INSERT IGNORE INTO skill (skill_name) VALUES ('Python');
INSERT IGNORE INTO skill (skill_name) VALUES ('C++');
INSERT IGNORE INTO skill (skill_name) VALUES ('C');
INSERT IGNORE INTO skill (skill_name) VALUES ('DSA');
INSERT IGNORE INTO skill (skill_name) VALUES ('Node.js');
INSERT IGNORE INTO skill (skill_name) VALUES ('Express.js');
INSERT IGNORE INTO skill (skill_name) VALUES ('MongoDB');
INSERT IGNORE INTO skill (skill_name) VALUES ('TypeScript');
INSERT IGNORE INTO skill (skill_name) VALUES ('Redux');
INSERT IGNORE INTO skill (skill_name) VALUES ('Tailwind CSS');
INSERT IGNORE INTO skill (skill_name) VALUES ('Bootstrap');
INSERT IGNORE INTO skill (skill_name) VALUES ('Linux');
INSERT IGNORE INTO skill (skill_name) VALUES ('Jenkins');
INSERT IGNORE INTO skill (skill_name) VALUES ('Azure');
INSERT IGNORE INTO skill (skill_name) VALUES ('GCP');
INSERT IGNORE INTO skill (skill_name) VALUES ('Power BI');
INSERT IGNORE INTO skill (skill_name) VALUES ('Excel');
INSERT IGNORE INTO skill (skill_name) VALUES ('Pandas');
INSERT IGNORE INTO skill (skill_name) VALUES ('NumPy');
INSERT IGNORE INTO skill (skill_name) VALUES ('Scikit-learn');
INSERT IGNORE INTO skill (skill_name) VALUES ('TensorFlow');
INSERT IGNORE INTO skill (skill_name) VALUES ('Spark');
INSERT IGNORE INTO skill (skill_name) VALUES ('Hadoop');
INSERT IGNORE INTO skill (skill_name) VALUES ('Firebase');
INSERT IGNORE INTO skill (skill_name) VALUES ('Android');
INSERT IGNORE INTO skill (skill_name) VALUES ('XML');
INSERT IGNORE INTO skill (skill_name) VALUES ('Jetpack Compose');

-- role master data
INSERT IGNORE INTO role (role_name) VALUES ('Java Developer');
INSERT IGNORE INTO role (role_name) VALUES ('Backend Developer');
INSERT IGNORE INTO role (role_name) VALUES ('Frontend Developer');
INSERT IGNORE INTO role (role_name) VALUES ('Full Stack Developer');
INSERT IGNORE INTO role (role_name) VALUES ('Software Engineer');
INSERT IGNORE INTO role (role_name) VALUES ('Data Analyst');
INSERT IGNORE INTO role (role_name) VALUES ('Data Engineer');
INSERT IGNORE INTO role (role_name) VALUES ('Machine Learning Engineer');
INSERT IGNORE INTO role (role_name) VALUES ('DevOps Engineer');
INSERT IGNORE INTO role (role_name) VALUES ('Android Developer');

-- role_skill mappings
-- Java Developer (role_id = 1)
INSERT IGNORE INTO role_skill VALUES (1,5);
INSERT IGNORE INTO role_skill VALUES (1,25);
INSERT IGNORE INTO role_skill VALUES (1,26);
INSERT IGNORE INTO role_skill VALUES (1,27);
INSERT IGNORE INTO role_skill VALUES (1,28);
INSERT IGNORE INTO role_skill VALUES (1,29);
INSERT IGNORE INTO role_skill VALUES (1,30);

-- Backend Developer (role_id = 2)
INSERT IGNORE INTO role_skill VALUES (2,5);
INSERT IGNORE INTO role_skill VALUES (2,25);
INSERT IGNORE INTO role_skill VALUES (2,26);
INSERT IGNORE INTO role_skill VALUES (2,27);
INSERT IGNORE INTO role_skill VALUES (2,28);
INSERT IGNORE INTO role_skill VALUES (2,29);
INSERT IGNORE INTO role_skill VALUES (2,30);
INSERT IGNORE INTO role_skill VALUES (2,31);
INSERT IGNORE INTO role_skill VALUES (2,44);

-- Frontend Developer (role_id = 3)
INSERT IGNORE INTO role_skill VALUES (3,1);
INSERT IGNORE INTO role_skill VALUES (3,2);
INSERT IGNORE INTO role_skill VALUES (3,3);
INSERT IGNORE INTO role_skill VALUES (3,4);
INSERT IGNORE INTO role_skill VALUES (3,40);
INSERT IGNORE INTO role_skill VALUES (3,41);
INSERT IGNORE INTO role_skill VALUES (3,42);
INSERT IGNORE INTO role_skill VALUES (3,43);
INSERT IGNORE INTO role_skill VALUES (3,28);

-- Full Stack Developer (role_id = 4)
INSERT IGNORE INTO role_skill VALUES (4,1);
INSERT IGNORE INTO role_skill VALUES (4,2);
INSERT IGNORE INTO role_skill VALUES (4,3);
INSERT IGNORE INTO role_skill VALUES (4,4);
INSERT IGNORE INTO role_skill VALUES (4,5);
INSERT IGNORE INTO role_skill VALUES (4,25);
INSERT IGNORE INTO role_skill VALUES (4,26);
INSERT IGNORE INTO role_skill VALUES (4,27);
INSERT IGNORE INTO role_skill VALUES (4,28);
INSERT IGNORE INTO role_skill VALUES (4,29);

-- Software Engineer (role_id = 5)
INSERT IGNORE INTO role_skill VALUES (5,5);
INSERT IGNORE INTO role_skill VALUES (5,34);
INSERT IGNORE INTO role_skill VALUES (5,35);
INSERT IGNORE INTO role_skill VALUES (5,36);
INSERT IGNORE INTO role_skill VALUES (5,28);

-- Data Analyst (role_id = 6)
INSERT IGNORE INTO role_skill VALUES (6,27);
INSERT IGNORE INTO role_skill VALUES (6,33);
INSERT IGNORE INTO role_skill VALUES (6,48);
INSERT IGNORE INTO role_skill VALUES (6,49);
INSERT IGNORE INTO role_skill VALUES (6,50);
INSERT IGNORE INTO role_skill VALUES (6,51);

-- Data Engineer (role_id = 7)
INSERT IGNORE INTO role_skill VALUES (7,33);
INSERT IGNORE INTO role_skill VALUES (7,27);
INSERT IGNORE INTO role_skill VALUES (7,54);
INSERT IGNORE INTO role_skill VALUES (7,55);
INSERT IGNORE INTO role_skill VALUES (7,6);

-- Machine Learning Engineer (role_id = 8)
INSERT IGNORE INTO role_skill VALUES (8,33);
INSERT IGNORE INTO role_skill VALUES (8,50);
INSERT IGNORE INTO role_skill VALUES (8,51);
INSERT IGNORE INTO role_skill VALUES (8,52);
INSERT IGNORE INTO role_skill VALUES (8,53);

-- DevOps Engineer (role_id = 9)
INSERT IGNORE INTO role_skill VALUES (9,31);
INSERT IGNORE INTO role_skill VALUES (9,32);
INSERT IGNORE INTO role_skill VALUES (9,45);
INSERT IGNORE INTO role_skill VALUES (9,44);
INSERT IGNORE INTO role_skill VALUES (9,6);
INSERT IGNORE INTO role_skill VALUES (9,46);
INSERT IGNORE INTO role_skill VALUES (9,47);

-- Android Developer (role_id = 10)
INSERT IGNORE INTO role_skill VALUES (10,5);
INSERT IGNORE INTO role_skill VALUES (10,57);
INSERT IGNORE INTO role_skill VALUES (10,58);
INSERT IGNORE INTO role_skill VALUES (10,56);
INSERT IGNORE INTO role_skill VALUES (10,59);

-- Company Meta Data
INSERT IGNORE INTO company
(company_name, about, website, industry, location, logo_url, company_size)
VALUES
('Google',
'Global technology company specializing in internet services, cloud computing, AI, and digital advertising.',
'https://about.google/',
'Information Technology',
'Bengaluru',
'https://logo.clearbit.com/google.com',
'100000+'),

('Microsoft',
'Multinational technology company developing software, cloud services, and AI solutions.',
'https://www.microsoft.com/',
'Information Technology',
'Hyderabad',
'https://logo.clearbit.com/microsoft.com',
'220000+'),

('Amazon',
'Global e-commerce and cloud computing company offering technology-driven products and services.',
'https://www.amazon.jobs/',
'E-commerce',
'Hyderabad',
'https://logo.clearbit.com/amazon.com',
'1500000+'),

('Infosys',
'Indian multinational company providing IT consulting and digital transformation services.',
'https://www.infosys.com/',
'Information Technology',
'Pune',
'https://logo.clearbit.com/infosys.com',
'300000+'),

('TCS',
'Leading IT services, consulting, and business solutions company.',
'https://www.tcs.com/',
'Information Technology',
'Pune',
'https://logo.clearbit.com/tcs.com',
'600000+'),

('Accenture',
'Global professional services company specializing in consulting, technology, and operations.',
'https://www.accenture.com/',
'Consulting',
'Bengaluru',
'https://logo.clearbit.com/accenture.com',
'700000+'),

('Cognizant',
'IT services and consulting company helping enterprises modernize technology.',
'https://www.cognizant.com/',
'Information Technology',
'Chennai',
'https://logo.clearbit.com/cognizant.com',
'340000+'),

('Capgemini',
'Global consulting and technology services company.',
'https://www.capgemini.com/',
'Information Technology',
'Mumbai',
'https://logo.clearbit.com/capgemini.com',
'360000+');