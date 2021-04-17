# TEDxCharoenkrung Backend Developer Assignment

## Assifnment Detail
- [Assignment Detail](assignment.md)
## Installation

```
$ npm install express body-parser cors
```
## How to start application
Server run on port 80 | `http://localhost:80/`
```
$ npm start
```

Heroku server
```
Heroku : 
```


### Attendee Endpoint

* ### `[GET] - /attendees` 
  Description : List all attendees
  
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
* ### `[GET] - /attendees?fields=query1,..`
  Description : List all attendees by some fields
  
  **Example**

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
* ### `[GET] - /attendees?sortAsc=field`: List and sort all attendees in ascending order by some fields
  Deacription : List all attendees by some fields
  
  **Example**
  
  Request: `[GET] /attendees?sortAsc=lastName`

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

* ### `[GET] - /attendee/{id}`
  Description : Get attendee's information

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
* ### `[GET] - /attendee/{id}?fields=query1,..`
  Description : Get attendee's information by some fields

  **Example**

  Request: `[GET] /attendee/1?fields=id,email`

  Response:
  ```json
  {
    status: 200,
    data: {
        id: "1",
        email: "iu@celebrity.com"
      }
  }
  ```

* ### `[POST] - /attendee`
  Description : Add new attendee

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
        id: "3",
        firstName: "New",
        lastName: "attendee",
        email: "attendee@email.com"
      }
    ]
  }
  ```
<br/>

### Speaker Endpoint

* ### `[GET] - /speakers`
  Description : List all speakers
  
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
* ### `[GET] - /speakers?fields=query1,..`
  Description : List all speakers by some fields
  
  **Example**
  
  Request: `[GET] /speakers?fields=firstName,topic`

  Response:
  ```json
    {
      status: 200,
      data: [
        {
          firstName: "Greta",
          topic: "Climate Change is Real"
        },
        {
          firstName: "Elon",
          topic: "Bitcoin and Climate Change"
        }
      ]
    }
  ```
* ### `[GET] - /speakers?sortAsc=field`
  Description : List and sort all attendees in ascending order by some fields
  
  **Example**
  
  Request: `[GET] /speakers?sortAsc=firstName`

  Response:
  ```json
    {
      status: 200,
      data: [
          {
          id: "2",
          firstName: "Elon",
          lastName: "Musk",
          topic: "Bitcoin and Climate Change"
        },
        {
          id: "1",
          firstName: "Greta",
          lastName: "Thunberg",
          topic: "Climate Change is Real"
        }
      ]
    }
  ```

* ### `[GET] - /speaker/{id}`: Get speaker's information
  Description : Get speaker's information
  
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

* ### `[GET] - /speaker/{id}?fields=query1,..`: Get attendee's information by some fields
  Description : Get attendee's information by some fields
  
  **Example**

  Request: `[GET] /speaker/1?fields=firstName,topic`

  Response:
  ```json
  {
    status: 200,
    data: {
        firstName: "Greta",
        topic: "Climate Change is Real"
      }
  }
  ```
* ### `[POST] - /speaker`: Add new speaker
  Description : Add new speaker
  
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
        id: "3",
        firstName: "New",
        lastName: "Speaker",
        email: "speaker@email.com"
      }
    ]
  }
  ```
<br/>
