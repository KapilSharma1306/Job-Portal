import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router-dom'
import { USER_API_END_POINT } from '../../utils/constant'
import { toast } from 'sonner'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '@/redux/auth.slice.js'
import { Loader2 } from 'lucide-react'


const Signup = () => {

    const [input, setInput] = useState({
        fullname: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "",
        file: ""
    });
    const {user} = useSelector(store => store.auth)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading } = useSelector((store) => store.auth);
    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }
    const changeFileHandler = (e) => {
        setInput({ ...input, file: e.target.files?.[0] });
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();    //formdata object
        formData.append("fullname", input.fullname);
        formData.append("email", input.email);
        formData.append("phoneNumber", input.phoneNumber);
        formData.append("password", input.password);
        formData.append("role", input.role);
        if (input.file) {
            formData.append("file", input.file);
        }

        try {
           dispatch(setLoading(true))
            const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
                headers: { 'Content-Type': "multipart/form-data" },
                withCredentials: true,
            });
            if (res?.data?.success) {
                navigate("/login");
                toast.success(res?.data?.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }finally{
            dispatch(setLoading(false))
        }
    }

   useEffect(() => {
         if(user){
           navigate('/')
         }
     },[])
    return (
        <div>
            <Navbar />
            <div className='flex items-center justify-center max-w-6xl mx-auto relative bottom-5'>
                <form onSubmit={submitHandler}  className='w-1/2 border border-gray-200 rounded-[10px] p-4 my-10'>
                    <h1 className='font-bold text-xl relative bottom-2'>Sign Up</h1>
                    <div className='my-2'>
                        <Label>Full Name</Label>
                        <Input
                            type="text"
                            name="fullname"
                            value={input.fullname}
                            onChange={changeEventHandler}
                            className='border-gray-300 rounded-[10px]'
                        />
                    </div>
                    <div className='my-2'>
                        <Label>Email</Label>
                        <Input
                            type="email"
                            value={input.email}
                            onChange={changeEventHandler}
                            name="email"className='border-gray-300 rounded-[10px]'
                        />
                    </div>
                    <div className='my-2'>
                        <Label>Phone Number</Label>
                        <Input
                            type="text"
                            value={input.phoneNumber}
                            onChange={changeEventHandler}
                            name="phoneNumber"className='border-gray-300 rounded-[10px]'
                        />
                    </div>
                    <div className='my-2'>
                        <Label>Password</Label>
                        <Input
                            type="password"
                            value={input.password}
                            onChange={changeEventHandler}
                            name="password"className='border-gray-300 rounded-[10px]'
                        />
                    </div>
                    <div className='flex items-center justify-between relative bottom-3'>
                        <RadioGroup className="flex items-center gap-4 my-5">
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="radio"
                                    name="role"
                                    value="student"
                                    id='student'
                                    checked={input.role === 'student'}
                                    onChange={changeEventHandler}
                                    className="cursor-pointer"
                                />
                                <Label htmlFor="student">Student</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="radio"
                                    name="role"
                                    value="recruiter"
                                    id='recruiter'
                                    checked={input.role === 'recruiter'}
                                    onChange={changeEventHandler}
                                    className="cursor-pointer"
                                />
                                <Label htmlFor="recruiter">Recruiter</Label>
                            </div>
                        </RadioGroup>
                        <div className='flex items-center gap-2'>
                            <Label>Profile</Label>
                            <Input
                                accept="image/*"
                                type="file"
                                onChange={changeFileHandler}
                                className='border-gray-300 rounded-[10px] cursor-pointer'
                            />
                        </div>
                    </div>
                    {loading ? (
            <Button className="w-full text-center bg-black text-white rounded-xl relative bottom-4 hover:bg-black">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </Button>
          ) : (
            <Button
              type="submit"
              className="bg-black  text-white w-full rounded-xl relative bottom-4 hover:bg-gray-600"
            >
              Signup
            </Button>
          )}
                    <p className='text-sm relative bottom-3 text-center'>Already have an account? <Link to="/login" className='text-blue-600 '>Login</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Signup