export default function Login() {
    return (
        <div className="auth-page">
            <form className="auth-card">
                <h1>เข้าสู่ระบบ</h1>
                <input type="email" placeholder="อีเมล" />
                <input type="password" placeholder="รหัสผ่าน" />
                <button type="submit">login</button>
            </form>
        </div>
    );
}