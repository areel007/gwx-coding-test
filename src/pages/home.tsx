import { useState } from "react"

export const Home = () => {
    const [form, setForm] = useState({
        username: '',
        password: ''
    })
    const [err, setErr] = useState("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, _: string) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

    }

    const handleSignin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!form.username || !form.password) {
            return setErr('All fields must be filled.')
        }
        else if (form.username === 'super_admin' && form.password === 'password') {
            window.localStorage.setItem('isLoggedIn', 'true')
            window.localStorage.setItem('role', 'super_admin')
            window.location.href = "/dashboard"
        }
        else if (form.username === 'admin' && form.password === 'password') {
            window.localStorage.setItem('isLoggedIn', 'true')
            window.localStorage.setItem('role', 'admin')
            window.location.href = "/dashboard"
        }
        else if (form.username === 'customer' && form.password === 'password') {
            window.localStorage.setItem('isLoggedIn', 'true')
            window.localStorage.setItem('role', 'client')
            window.location.href = "/dashboard"
        }
        else setErr('Wrong sign in credentials')
    }

    return <main className="w-screen h-screen bg-primary flex justify-center items-start p-[10%_0]">
        <form className="p-[20px] bg-white max-w-[400px] w-[90%]" onSubmit={handleSignin}>
            <span className="text-[20px]">Sign in</span>
            <p>{err}</p>
            <div className="flex flex-col gap-[10px]">
                <input type="text" name="username" className="border-b border-zinc-300 outline-none bg-white p-[10px] w-full group" id="username" placeholder="username" onChange={(e) => handleChange(e, form.username)} />
                <input type="password" name="password" className="border-b border-zinc-300 outline-none bg-white p-[10px] w-full group" id="username" placeholder="password" onChange={(e) => handleChange(e, form.password)} />
                <button className="p-[10px] bg-black text-white">Submit</button>
            </div>
        </form>
    </main>
}