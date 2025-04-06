const form = document.getElementById('userForm');
const userList = document.getElementById('userList');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const user = Object.fromEntries(formData.entries());
    await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
    });
    form.reset();
    loadUsers();
});

async function loadUsers() {
    const res = await fetch('/api/users');
    const users = await res.json();
    userList.innerHTML = users.map(u => `<li>${u.name} - ${u.email}</li>`).join('');
}

loadUsers();
