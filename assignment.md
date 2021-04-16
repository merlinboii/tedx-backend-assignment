# Backend Developer - Assignment

ผู้สมัครจะต้องพัฒนา API ที่เกี่ยวกับการจัดการ Speaker และ Attendee ของงาน TEDxCharoenkrung ที่มีรายละเอียดตามที่ระบุด้านล่าง โดยให้ใช้ data จากไฟล์ `attendees.js` และ `speakers.js` เป็น data ตั้งต้นของ API

### **Note**:
- ผู้สมัครไม่จำเป็นต้องใช้ database สำหรับเก็บข้อมูลเหล่านี้ และไม่จำเป็นต้องคำนึงถึงเรื่อง consistency หรือ concurrency สำหรับ assignment นี้ (สามารถเก็บข้อมูลไว้ใน memory ของ application ได้เลย)
- หากผู้สมัครสามารถทำตาม requirement เบื้องต้นเสร็จได้อย่างรวดเร็ว ผู้สมัครสามารถเลือกทำ requirement เพิ่มเติมตามที่ระบุในเซคชัน **Extra Requirements** ได้ โดยจะได้รับการพิจารณาเป็นพิเศษ

<br/>

## รายละเอียดของแต่ละ Endpoint
<br/>

### Attendee Endpoint

* ### `[GET] - /attendees`: List all attendees

  **Example**

  Request: `[GET] /attendees`

  Response:
  ```json
  {
    status: 200,
    data: [
      {
        id: "1",
        firstName: "Ji-eun",
        lastName: "Lee",
        email: "iu@celebrity.com"
      },
      {
        id: "2",
        firstName: "Minho",
        lastName: "Choi",
        email: "minho@shineesback.com"
      }
    ]
  }
  ```

* ### `[GET] - /attendee/{id}`: Get attendee's information

  **Example**

  Request: `[GET] /attendee/1`

  Response:
  ```json
  {
    status: 200,
    data: {
        id: "1",
        firstName: "Ji-eun",
        lastName: "Lee",
        email: "iu@celebrity.com"
      }
  }
  ```

* ### `[POST] - /attendee`: Add new attendee

  **Example**

  Request: `[POST] /attendee`

  Body:
  ```json
  {
    firstName: "New",
    lastName: "attendee",
    email: "attendee@email.com"
  }
  ```

  Response:
  ```json
  {
    status: 200,
    data: [
      {
        id: "1",
        firstName: "Ji-eun",
        lastName: "Lee",
        email: "iu@celebrity.com"
      },
      {
        id: "2",
        firstName: "Minho",
        lastName: "Choi",
        email: "minho@shineesback.com"
      },
      {
        id: "{any-id-of-your-choice}",
        firstName: "New",
        lastName: "attendee",
        email: "attendee@email.com"
      }
    ]
  }
  ```
<br/>

### Speaker Endpoint

* ### `[GET] - /speakers`: List all speakers

  **Example**

  Request: `[GET] /speakers`

  Response:
  ```json
  {
    status: 200,
    data: [
      {
        id: "1",
        firstName: "Greta",
        lastName: "Thunberg",
        topic: "Climate Change is Real"
      },
      {
        id: "2",
        firstName: "Elon",
        lastName: "Musk",
        topic: "Bitcoin and Climate Change"
      }
    ]
  }
  ```

* ### `[GET] - /speaker/{id}`: Get speaker's information

  **Example**

  Request: `[GET] /speaker/1`

  Response:
  ```json
  {
    status: 200,
    data: {
      id: "1",
      firstName: "Greta",
      lastName: "Thunberg",
      topic: "Climate Change is Real"
    }
  }
  ```

* ### `[POST] - /speaker`: Add new speaker

  **Example**

  Request: `[POST] /speaker`

  Body:
  ```json
  {
    firstName: "New",
    lastName: "Speaker",
    email: "speaker@email.com"
  }
  ```

  Response:
  ```json
  {
    status: 200,
    data: [
      {
        id: "1",
        firstName: "Greta",
        lastName: "Thunberg",
        topic: "Climate Change is Real"
      },
      {
        id: "2",
        firstName: "Elon",
        lastName: "Musk",
        topic: "Bitcoin and Climate Change"
      },
      {
        id: "{any-id-of-your-choice}",
        firstName: "New",
        lastName: "Speaker",
        email: "speaker@email.com"
      }
    ]
  }
  ```
<br/>

### **Extra Requirements**
ผู้สมัครสามารถเลือกเพิ่มความสามารถให้กับ API ตามตัวเลือกด้านล่างนี้ได้ โดยไม่จำเป็นต้องทำเรียงตามข้อ หรือหากอยากเพิ่มความสามารถอื่นที่ไม่มีอยู่ในลิสต์นี้ก็สามารถทำได้เช่นเดียวกัน

- เพิ่มความสามารถในการเลือก GET เฉพาะ field ที่ต้องการสำหรับทุก GET endpoints ดังตัวอย่าง

Request: `[GET] /attendees?fields=firstName,lastName`

Response:
```json
  {
    status: 200,
    data: [
      {
        firstName: "Ji-eun",
        lastName: "Lee",
      },
      {
        firstName: "Minho",
        lastName: "Choi",
      }
    ]
  }
  ```

- เพิ่มความสามารถในการเลือก SORT ข้อมูลที่จะได้รับด้วย field ที่ต้องการแบบ ascending order สำหรับทุก GET endpoints ดังตัวอย่าง

Request: `[GET] /attendees?sortByAsc=lastName`

Response:
```json
  {
    status: 200,
    data: [
      {
        id: "2",
        firstName: "Minho",
        lastName: "Choi",
        email: "minho@shineesback.com"
      },
      {
        id: "1",
        firstName: "Ji-eun",
        lastName: "Lee",
        email: "iu@celebrity.com"
      }
    ]
  }
  ```