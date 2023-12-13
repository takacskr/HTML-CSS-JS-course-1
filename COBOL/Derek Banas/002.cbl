       IDENTIFICATION DIVISION.
       PROGRAM-ID. cobolTut2.
       AUTHOR. Krisztian Takacs.
       DATE-WRITTEN. December 13st 2023.
       
       ENVIRONMENT DIVISION.
       
       DATA DIVISION.
       
       FILE SECTION.
       
       WORKING-STORAGE SECTION.
       01 SampleData PIC X(10) VALUE "Stuff".
       01 JustLetters PIC X(3) VALUE "ABC".
       01 JustNums PIC 9(4) VALUE 1234.
       01 SignedInt PIC S9(4) VALUE -1234.
       01 PayCheck PIC 9(6)V99 VALUE ZEROS.
       
       01 Customer.
           02 Ident        PIC 9(3).
           02 CustName     PIC X(20).
           02 DateOfBirth.
               03 MOB PIC 99.
               03 DOB PIC 99.
               03 YOB PIC 9(4).
       
       01 Num1 PIC 9 VALUE 5.
       01 Num2 PIC 9 VALUE 4.
       01 Num3 PIC 9 VALUE 3.
       01 Ans PIC S9(4)V99 VALUE 0.
       01 Rem PIC 9V99.
       
       PROCEDURE DIVISION.
       
       MOVE "More Stuff" TO SampleData
       DISPLAY SampleData
       
       MOVE "123" TO SampleData
       DISPLAY SampleData
       
       MOVE 123 TO SampleData
       DISPLAY SampleData
       
       DISPLAY PayCheck
       
       MOVE "123Bob Smith        12211974" TO Customer
       DISPLAY CustName
       DISPLAY MOB "/" DOB "/" YOB
       
       MOVE ZERO TO SampleData
       DISPLAY SampleData
       
       MOVE SPACE TO SampleData
       DISPLAY SampleData
       
       MOVE HIGH-VALUE TO SampleData
       DISPLAY SampleData
       
       MOVE LOW-VALUE TO SampleData
       DISPLAY SampleData
       
       MOVE QUOTE TO SampleData
       DISPLAY SampleData
       
       MOVE ALL "2" TO SampleData
       DISPLAY SampleData
       
       ADD Num1 TO Num2 GIVING Ans
       DISPLAY Ans
       
       SUBTRACT Num1 FROM Num2 GIVING Ans
       DISPLAY Ans
       
       MULTIPLY Num1 BY Num2 GIVING Ans
       DISPLAY Ans
       
       DIVIDE Num1 INTO Num2 GIVING Ans
       DISPLAY Ans
       
       DIVIDE Num1 INTO Num2 GIVING Ans REMAINDER Rem
       DISPLAY "Remaind " Rem
       
       ADD Num1, Num2 TO Num2 GIVING Ans
       ADD Num1, Num2, Num3 GIVING Ans
       DISPLAY Ans
       
       COMPUTE Ans = Num1 + Num2
       DISPLAY Ans
       
       COMPUTE Ans = Num1 - Num2
       DISPLAY Ans
       
       COMPUTE Ans = Num1 * Num2
       DISPLAY Ans
       
       COMPUTE Ans = Num1 / Num2
       DISPLAY Ans
       
       COMPUTE Ans = Num1 ** 2
       DISPLAY Ans
       
       COMPUTE Ans = (3 + 5) * 5
       DISPLAY Ans
       
       COMPUTE Ans = 3 + 5 * 5
       DISPLAY Ans
       
       COMPUTE Ans ROUNDED = 3.0 + 2.005
       DISPLAY Ans
       
       STOP RUN.
