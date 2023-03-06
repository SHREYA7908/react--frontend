import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement
} from "@chakra-ui/react";
//import { FaUserAlt, FaLock } from "react-icons/fa";
//const CFaUserAlt = chakra(FaUserAlt);
//const CFaLock = chakra(FaLock);
// import "./styles.css";
//import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
const From1 = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);
  return (
    <Flex
    flexDirection="column"
    width="100wh"
    height="100vh"
    backgroundColor="gray.200"
    justifyContent="center"
    alignItems="center"
  >
    <Stack
      flexDir="column"
      mb="2"
      justifyContent="center"
      alignItems="center"
    >
      <Avatar bg="teal.500" />
      <Heading color="teal.400">Welcome</Heading>
      <Box minW={{ base: "90%", md: "468px" }}>
        <form>
          <Stack
            spacing={4}
            p="1rem"
            backgroundColor="whiteAlpha.900"
            boxShadow="md"
          >
            <FormControl>
              <InputGroup>
                {/* <InputLeftElement
                  pointerEvents="none"
                  children={<CFaUserAlt color="gray.300" />}
                /> */}

      <h1>Login</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
          password: Yup.string().required("Password is required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Login
            </button>
            New to us?{" "}
            <Link color="teal.500" href="#">
              Sign Up
            </Link>
          </Form>
           
         
        
        )}
      </Formik>
 </InputGroup>
 </FormControl>
 </Stack>
 </form>
 </Box>
 </Stack>
 </Flex>
 
  
  );
};

export default From1;
