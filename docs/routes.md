# Routes

Route             | Auth  |   Component
------------------|-------|------------
"/"               | None  |   App -> Splash 
"/login"          | None  |   App -> Auth
"/user/:id"       | User  |   App -> Home (Header/Footer) -> UserDashboard / User Nav
"/questions"      | User  |   App -> Home (Header/Footer) -> QuestionDetail / Left Nav
"/submit-question"| User  |   App -> Home (Header/Footer) -> SubmitQuestion
"/add-question"   | Admin |   App -> CMS -> AddQuestion
"/edit-question"  | Admin |   App -> CMS -> EditQuestion