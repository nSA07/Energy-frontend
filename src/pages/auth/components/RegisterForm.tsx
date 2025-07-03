import { useMutation } from "@tanstack/react-query"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Label } from "@/components/ui/label"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import { useNavigate } from "react-router";
import { toast } from "sonner"
import { authService } from "@/services/auth.service"

const formSchema = z.object({
  workspaceName: z.string().min(1, {
    message: "Назва простору обов'язкова.",
  }),
  workspaceAddress: z.string().min(1, {
    message: "Адреса простору обов'язкова.",
  }),
  workspacePhone: z.string().min(1, {
    message: "Номер телефону обов'язковий.",
  }),
  email: z.string().email("Електронна пошта обов'язкова."),
  password: z.string().min(6, {
    message: "Пароль мє бути більше ніж 6 символів.",
  }),
})

export const RegisterForm =() => {

  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      workspaceName: "",
      workspaceAddress: "",
      workspacePhone: "",
      email: "",
      password: "",
    },
  })

  const { mutate, isPending } = useMutation({
    mutationKey: ["auth"],
    mutationFn: async (data: any) => authService.register(data),
    onSuccess: (data) => {
      if(data.status === 201 && data.data.id) {
        form.reset()
        toast.success("Registry in successfully!")
        navigate('/i')
      }
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || "Something went wrong")
    }
  })
  
  function onSubmit(values: any) {
    mutate(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-3 py-6">
          <div className="grid gap-3">
            <FormField
              control={form.control}
              name="workspaceName"
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor="workspaceName">Назва простору</Label>
                  <FormControl>
                    <Input id="workspaceName" type="workspaceName" placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid gap-3">
            <FormField
              control={form.control}
              name="workspaceAddress"
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor="workspaceAddress">Адреса простору</Label>
                  <FormControl>
                    <Input id="workspaceAddress" type="workspaceAddress" placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid gap-3">
            <FormField
              control={form.control}
              name="workspacePhone"
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor="workspacePhone">Номер телефону</Label>
                  <FormControl>
                    <Input id="workspacePhone" type="workspacePhone" placeholder="+380 - XXX - XXX - XX" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid gap-3">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor="email">Email</Label>
                  <FormControl>
                    <Input id="email" type="email" placeholder="m@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid gap-3">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor="password">Password</Label>
                  <FormControl>
                    <Input id="password" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button
            disabled={isPending}
            type="submit"
            className="w-full cursor-pointer"
          >
            Спробувати безкоштовно
          </Button>

          <div className="space-y-2 text-sm">
            <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
              By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
              and <a href="#">Privacy Policy</a>.
            </div>
          </div>

        </div>
      </form>
    </Form>
  );
}