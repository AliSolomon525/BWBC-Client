export const Endpoints = {
  authorization: {
    signupUser: `http://localhost:3000/api/registerUser`,
    loginUser: `http://localhost:3000/api/loginUser`,
    getUserById: `http://localhost:3000/api/userInfo/`,
    getAllUsers: `http://localhost:3000/api/userInfo/`,
    deleteUser: `http://localhost:3000/api/deleteUser/`,
    signupAdmin: `http://localhost:3000/api/registerAdmin`,
    loginAdmin: `http://localhost:3000/api/loginAdmin`,
    getAdminById: `http://localhost:3000/api/adminInfo/`,
    bookCreate: `http://localhost:3000/api/book/create`,
    bookUpdate: `http://localhost:3000/api/book/updatebook/`,
    bookDelete: `http://localhost:3000/api/book/deletebook/`,
    getBookById: `http://localhost:3000/api/book/books/`,
    getAllBooks: `http://localhost:3000/api/book/books`,
    bookListCreate: `http://localhost:3000/api/booklist/create`,
    bookListUpdate: `http://localhost:3000/api/booklist/updatelist/`,
    bookListDelete: `http://localhost:3000/api/booklist/list/`,
    getBookListById: `http://localhost:3000/api/booklist/booklist/`,
    getAllBookLists: `http://localhost:3000/api/booklist/booklists`,
  },
};
