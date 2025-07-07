import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import "./Register.css";

function Register() {
  const form = useForm({
    defaultValues: {
      username: "",
      email: "",
      phonenumber: "",
      gender: "",
      password: "",
      confirmpassword: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form data:", data);
  };

  return (
    <div
      className="space-y-8 bg-cover bg-center h-screen w-full flex flex-wrap justify-center items-center flex-col"
      style={{
        backgroundImage:
          "linear-gradient(rgba(96, 165, 250, 0.4), rgba(96, 165, 250, 0.4)), url('/src/assets/nature.jpg')",
      }}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="form">
          <div className="formDiv1">
            <div className="w-[80%]">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[20px] font-light">
                      Username
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="text-white text-[20px] font-light w-[70%]"
                        placeholder="Enter your name e.g John Doe"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="w-[80%]">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[20px] font-light">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="text-white text-[20px] font-light w-[70%]"
                        placeholder="Enter Your email eg: you@gmail.com"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div className="w-[80%]">
              <FormField
                control={form.control}
                name="phonenumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[20px] font-light">
                      phone number
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="text-white text-[20px] font-light w-[70%]"
                        placeholder="Enter your number eg 07..."
                        type="number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="formDiv2">
            <div className="w-[80%]">
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[20px] font-light">
                      Gender
                    </FormLabel>
                    <FormControl>
                      <Select>
                        <SelectTrigger className="w-[70%]">
                          <SelectValue placeholder="Theme" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="dark">Dark</SelectItem>
                          <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="w-[80%]">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[20px] font-light">
                      password
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="text-white text-[20px] font-light w-[70%]"
                        placeholder="Enter your password"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="w-[80%]">
              <FormField
                control={form.control}
                name="confirmpassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[20px] font-light">
                      Confirm password
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="text-white text-[20px] font-light w-[70%]"
                        placeholder="Enter your password to confirm it"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <Button type="submit" className="">
            Submit
          </Button>
          <FormDescription className="w-[100%]">
            This is your public display name.
          </FormDescription>
        </form>
      </Form>
    </div>
  );
}

export default Register;
