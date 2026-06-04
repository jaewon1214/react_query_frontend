import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLoginUser } from '../../no3_store/hooks/uesUser'
import styled from 'styled-components'



const initialState = {
    username: "",
    password: ""
}

const LoginForm = () => {
    const [user, setUser] = useState(initialState)
    const loginMutation = useLoginUser();
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;

        setUser(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(user.username.trim()===""){
            alert("이름을 넣어주세요!")
            return
        }
        if(user.password.trim()===""){
            alert("비밀번호를 넣어주세요!")
            return
        }

        if (user.username.trim()) {  
            try{
                await loginMutation.mutateAsync(user)
                alert("로그인 성공")
                navigate('/')
            }catch{
                alert("로그인 실패")
            }     
            return  
        }
    }

    return (
        <Container>
            <FormCard onSubmit={handleSubmit}>
                <Title>로그인</Title>
                <SubTitle>
                    계정 정보를 입력해주세요
                </SubTitle>
                <Input
                    type="text"
                    name="username"
                    value={user.username}
                    onChange={handleChange}
                    placeholder='사용자 이름'
                />
                <Input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    placeholder='비밀번호'
                />
                <LoginButton>
                    로그인
                </LoginButton>
                <RegisterButton
                    type="button"
                    onClick={() => navigate("/register")}
                >
                    아직 회원이 아니신가요? 회원가입
                </RegisterButton>
            </FormCard>
        </Container>
    )
}

export default LoginForm


const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background:
        linear-gradient(
            135deg,
            #eff6ff 0%,
            #dbeafe 100%
        );
`

const FormCard = styled.form`
    width: 420px;

    background: white;

    padding: 48px 40px;

    border-radius: 24px;

    box-shadow:
        0 10px 40px rgba(0,0,0,0.08);

    display: flex;
    flex-direction: column;
`

const Title = styled.h2`
    text-align: center;
    font-size: 32px;
    color: #0f172a;

    margin-bottom: 8px;
`

const SubTitle = styled.p`
    text-align: center;
    color: #64748b;
    font-size: 15px;

    margin-bottom: 32px;
`

const Input = styled.input`
    width: 100%;

    padding: 16px;

    margin-bottom: 18px;

    border-radius: 12px;

    border: 1px solid #dbe4ee;

    font-size: 15px;

    outline: none;

    box-sizing: border-box;

    transition: 0.2s;

    &:focus{
        border-color: #3b82f6;

        box-shadow:
            0 0 0 4px rgba(59,130,246,0.12);
    }
`

const BaseButton = styled.button`
    width: 100%;

    padding: 15px;

    border: none;

    border-radius: 12px;

    font-size: 15px;
    font-weight: 600;

    cursor: pointer;

    transition: 0.2s;
`

const LoginButton = styled(BaseButton)`
    background: #3b82f6;
    color: white;

    margin-top: 8px;

    &:hover{
        background: #2563eb;
        transform: translateY(-1px);
    }
`

const RegisterButton = styled(BaseButton)`
    background: transparent;

    color: #3b82f6;

    margin-top: 12px;

    &:hover{
        background: #eff6ff;
    }
`