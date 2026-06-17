export default function Register() {
    return (
        <div className="auth-page">
            <form className="auth-card">
                <h1>ลงทะเบียน</h1>
                <input type="name" placeholder="ชื่อผู้ใช้" />
                <input type="email" placeholder="อีเมล" />
                <input type="password" placeholder="รหัสผ่าน" />
                <button type="submit">ลงทะเบียน</button>
            </form>
        </div>
    );
}