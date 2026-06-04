import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useRegisterUser } from '../../no3_store/hooks/uesUser'

const initialState = {
    username: "",
    password: "",
    confirmpassword: "",
    age: "",
    email: "",
    city: "",
}

const RegisterForm = ({ setUsers }) => {
    const [user, setUser] = useState(initialState);
    const registerMutation = useRegisterUser();
    const navigate = useNavigate()

    const handleChange = (event) => {
        const { name, value } = event.target
        setUser(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (user.password !== user.confirmpassword) {
            alert("비밀번호가 일치하지 않습니다.")
            return
        }

        const { confirmpassword, ...userData} =user
        try{
            registerMutation.mutateAsync(userData)
            alert("회원가입이 완료되었습니다.")
            navigate('/login')
        }catch{
            alert("회원가입이 실패.")
        }
    }

    return (
        <Container>
            <FormCard onSubmit={handleSubmit}>
                <Title>회원가입</Title>
                <SubTitle>새 계정을 등록해주세요</SubTitle>

                <Input
                    type="text"
                    name="username"
                    value={user.username}
                    onChange={handleChange}
                    placeholder="사용자 이름"
                />

                <Input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    placeholder="비밀번호"
                />

                <Input
                    type="password"
                    name="confirmpassword"
                    value={user.confirmpassword}
                    onChange={handleChange}
                    placeholder="비밀번호 확인"
                />

                <Input
                    type="number"
                    name="age"
                    value={user.age}
                    onChange={handleChange}
                    placeholder="나이 입력"
                />

                <Input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    placeholder="이메일 입력"
                />

                <Input
                    type="text"
                    name="city"
                    value={user.city}
                    onChange={handleChange}
                    placeholder="도시"
                />

                <RegisterButton>등록</RegisterButton>

                <LoginButton
                    type="button"
                    onClick={() => navigate('/login')}
                >
                    이미 계정이 있으신가요? 로그인
                </LoginButton>
            </FormCard>
        </Container>
    )
}

export default RegisterForm

const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
`

const FormCard = styled.form`
    width: 420px;
    background: white;
    padding: 48px 40px;
    border-radius: 24px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.08);

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

    &:focus {
        border-color: #3b82f6;
        box-shadow: 0 0 0 4px rgba(59,130,246,0.12);
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

const RegisterButton = styled(BaseButton)`
    background: #3b82f6;
    color: white;

    margin-top: 8px;

    &:hover {
        background: #2563eb;
        transform: translateY(-1px);
    }
`

const LoginButton = styled(BaseButton)`
    background: transparent;
    color: #3b82f6;

    margin-top: 12px;

    &:hover {
        background: #eff6ff;
    }
`