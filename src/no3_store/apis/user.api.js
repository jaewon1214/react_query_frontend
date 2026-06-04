import axios from "axios";



export const userLoginApi = async (userObj) => { //쿼리 스트링? name = "john" 이 Obj 에선 {name : "john"}
    try{
        const response = await axios.get(
            `http://localhost:3001/user?username=${userObj.username}`); /*쿼리 스트링 user table에 접근해서 name 이 user.username인 것을 찾아라 리스트로 전달 id는 유니크 하지만 이름은 아니기때문에*/ 
            const users = response.data
        if(!users.length) {
            throw new Error("존재하지 않는 유저 사용자")
        }
        const founduser = users[0]; //리스트로 오기때문에 인덱스 번호

        if(founduser.password !== userObj.password){
            throw new Error(
                "비밀번호가 일치하지 않습니다."
            );
        }
        return founduser 
    }catch(error){
        throw new Error(error.message);

    }
}

export const userRegisterApi = async (userObj) => { 
    try{
        const response = await axios.get(`http://localhost:3001/user?username=${userObj.username}`)
        const users = response.data
        if(users.length){
            throw new Error(
            "이미 존재하는 사용자입니다."
            );
        }
        return await axios.post(`http://localhost:3001/user`, userObj)
    }catch(error){
        return error

    }
}
