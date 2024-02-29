import express from 'express';
import jwt from 'jsonwebtoken';
const app = express();
app.use(express.json());

const users = [
    // 这只是一个示例，实际应用中，您应该使用数据库存储用户信息
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
];

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => { return u.username === username && u.password === password });

    if (user) {
        const accessToken = jwt.sign({ username: user.username }, 'your_secret_key');
        res.json({ accessToken });
    } else {
        res.send('Username or password incorrect');
    }
});

app.listen(3000);