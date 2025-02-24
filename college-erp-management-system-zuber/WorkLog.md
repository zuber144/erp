# College ERP Management System Project.

# Work Log

## **Date: February 21, 2025**

### **Task Completed:**

1. **Created a Custom Exception: `StudentNotFoundException`**

   - Extends `RuntimeException`.
   - Returns a custom message when a student is not found.

2. **Developed `StudentDao` (Data Access Object)**

   - Handles database operations for `Student` entity.
   - Added a method to find students by `registrationNumber`.

3. **Implemented Response Structure (`ResponseStructure<T>`)**

   - Standardized API responses with message, status, and data.

4. **Created `StudentService` Class**

   - Added `findByRegistrationNumber` method.
   - Uses `ResponseStructure` and `ResponseEntity` for consistency.
   - Throws `StudentNotFoundException` if registration number is invalid.

5. **Developed `StudentController`**
   - Implemented `/login` API endpoint.
   - Calls `findByRegistrationNumber` service method.
   - Returns appropriate responses (success/failure).

### **Challenges Faced:**

- **Exception Handling:** Ensuring proper error messages are returned.

### **Next Steps:**

✅ **Create an Attendance Check System for Students**

- Add a new `Attendance` entity with fields like `studentId`, `date`, and `status (Present/Absent)`.
- Implement an `AttendanceDao` to manage database operations.
- Develop an `AttendanceService` with a method `markAttendance(studentId, status)`.
- Create an `AttendanceController` with an API endpoint to check attendance.
- Implement validations (e.g., prevent marking attendance multiple times a day).
- Handle errors if a student is not found.
