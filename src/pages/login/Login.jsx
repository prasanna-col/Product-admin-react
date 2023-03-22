import React, { useState } from "react";
import "./login.scss"
import Box from '@mui/material/Box';
import AppInput from "../../components/AppInput";
import AppButton from "../../components/AppButton";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("")
  const [pwd, setPwd] = useState("")

  const onlogin = () => {
    // API call here
    console.log("username", username)
    console.log("pwd", pwd)
    if (username === "admin" && pwd === "123456") {
      navigate("/home");
    } else {

    }
  }

  return (
    <div>

      <div
        style={{
          display: 'flex',
          flexDirection: "column",
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <Box>
          <Box p={1} sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          >
            <span style={{ fontSize: 20, fontWeight: "bold" }}>Food App Admin portal</span>
          </Box>

          <AppInput
            label={"Username"}
            onChange={(e) => { setUsername(e.target.value) }}
            value={username}
          />

          <AppInput
            label={"Password"}
            onChange={(e) => { setPwd(e.target.value) }}
            value={pwd}
            password
          />

          <AppButton
            label={"Login"}
            onPress={() => { onlogin() }}
          />
        </Box>

      </div>
    </div>


  )
}

export default Login