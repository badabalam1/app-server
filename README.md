# API Docmuent
## `/register`
### POST
**Request**
```json
{
    "id" : "admin",
    "pw" : "1234",
    "name" : "어드민",
    "profile" : "프로필 사진객체"
}
```

**Respones**
> 성공했을 때
```json
{
    "result" : {
        "success" : true, 
        "message" : "회원가입에 성공했습니다."
    }
}
```
> 실패했을 때
```json
{
    "result" : {
        "success" : false,
        "message" : "이미 등록된 아이디입니다"
    }
}
```

## `/login`
### POST
**Request**
```json
{
    "id" : "admin",
    "pw" : "1234"
}
```

**Respones**
> 성공했을 때
```json
{
    "result" : {
        "success" : true,
        "message" : "로그인에 성공하였습니다.",
    },
    "auth" :   {
        "token" : "{토큰 값}"
    },
    "user" :   {
        "username" : "{사용자 닉네임}"
    }
}
``` 

> 실패했을 때
```json
{
    "result" : {
        "success" : false,
        "message" : "아이디 혹은 비밀번호가 틀렸습니다."
    }
}
```

## `/{id}`
### PUT
**Request**

```json
{
    "pw" : "1234"
}
headers
 authorization: "token value"
```
**Respones**
> 성공했을 때
```json
{
    "result" : {
        "success" : true,
        "message" : "비밀번호가 변경되었습니다."
    }
}
```


> 계정이 존재하지 않을 때
```json
{
    "result" : {
        "success" : false,
        "message" : "계정이 존재하지 않습니다."
    }
}
```

> 권한이 없을 때
```json
{
    "result" : {
        "success" : false,
        "message" : "권한이 없습니다."
    }
}
```

> 비밀번호가 기존이랑 같을 때
```json
{
    "result" : {
        "success" : false,
        "message" : "기존 비밀번호랑 같습니다"
    }
}
```

## `/{id}`
### DELETE
**Request**
```json
{
    "id" : "admin"
}
headers
 authorization: "token value"
```

**Respones**
> 성공했을 때
```json
{
    "result" : {
        "success" : true,
        "message" : "계정이 삭제되었습니다."
    }
}
```

 > 계정이 없을 때
 ```json
{
    "result" : {
        "success" : false,
        "message" : "계정이 존재하지 않습니다."
    }
}
```

> 권한이 없을 때
```json
{
    "result" : {
        "success" : false,
        "message" : "권한이 없습니다."
    }
}
```
