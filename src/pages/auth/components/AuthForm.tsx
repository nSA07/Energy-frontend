import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useNavigate } from "react-router";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { GalleryVerticalEnd } from "lucide-react"
import { Link } from "react-router"
import { useMutation } from "@tanstack/react-query"
import { authService } from "@/services/auth.service"
import { toast } from "sonner";

const formSchema = z.object({
  email: z.string().email("Invalid email address."),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
})


export const AuthForm = ({ className, ...props }: React.ComponentProps<"div">) => {
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const { mutate, isPending } = useMutation({
    mutationKey: ["auth"],
    mutationFn: async (data: any) => authService.login(data),
    onSuccess: (data) => {
      if(data.status === 201 && data.data.id) {
        form.reset()
        toast.success("Logged in successfully!")
        navigate('/i')
      }
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || "Something went wrong")
    }
  })

  function onSubmit(values: any) {
    mutate(values)
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center gap-2">
              <div className="flex size-8 items-center justify-center rounded-md">
                <GalleryVerticalEnd className="size-6" />
              </div>
              <span className="sr-only">Acme Inc.</span>
              <h1 className="text-xl font-bold">Welcome to Acme Inc.</h1>
              <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link to='/auth/register' className="underline underline-offset-4">
                  Sign up
                </Link>
              </div>
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

            <Button disabled={isPending} type="submit" className="w-full cursor-pointer">
              Login
            </Button>
          </div>
        </form>
      </Form>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  )
}
