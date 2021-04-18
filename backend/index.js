//packages
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import db from "./utils/db.js";
import sendMail from "./utils/send-mail.js";
import compression from "compression";
import path from "path";
// import arabicSearchFilter from "./utils/arabic-search-filter.js";
const __dirname = path.resolve();

const app = express();

app.use(compression());
app.use(bodyParser.json());
app.use(cors());

app.use(express.static("build"));

// (async () => {
//   const names = await db("contributors").select("Name");
//   names.forEach(async ({ Name }) => {
//     await db("contributors")
//       .update({ Search: arabicSearchFilter(Name) })
//       .where({ Name });
//   });
//   console.log("Done");
// })();

app.get("*", function (req, res) {
  res.sendFile(`${__dirname}/build/index.html`);
});

app.post("/listContributors", async (req, res) => {
  const { default: listUsers } = await import(
    "./Controllers/list-contributors/list-contributors.js"
  );
  listUsers(req, res);
});

app.post("/listUsers", async (req, res) => {
  const { default: listUsers } = await import(
    "./Controllers/list-users/list-users.js"
  );
  listUsers(req, res);
});

app.post("/listPendingRequests", async (req, res) => {
  const { default: listPendingRequests } = await import(
    "./Controllers/list-pending-requests/list-pending-requests.js"
  );
  listPendingRequests(res);
});

app.post("/handleRequest", async (req, res) => {
  const { default: handleRequest } = await import(
    "./Controllers/list-pending-requests/handle-request.js"
  );
  handleRequest(req.body, res);
});

app.post("/handleEnDisUserAcc", async (req, res) => {
  const { default: handleEnDisUserAcc } = await import(
    "./Controllers/admin-user-crud/handle-en-dis-user-acc.js"
  );
  handleEnDisUserAcc(req.body, res);
});

app.post("/deleteUser", async (req, res) => {
  const { default: deleteUser } = await import(
    "./Controllers/admin-user-crud/delete-user.js"
  );
  deleteUser(req.body, res);
});

app.post("/editUser", async (req, res) => {
  const { default: editUser } = await import(
    "./Controllers/admin-user-crud/edit-user.js"
  );
  editUser(req.body, res);
});

app.post("/search", async (req, res) => {
  const { default: search } = await import(
    "./Controllers/search-users/search-users.js"
  );
  search(req.body.searchField, res);
});

app.post("/register", async (req, res) => {
  const { default: register } = await import(
    "./Controllers/register/register.js"
  );
  register(req.body, res);
});

app.post("/login", async (req, res) => {
  const { default: login } = await import("./Controllers/login/login.js");
  login(req.body, res);
});

app.post("/forgetPassword", async (req, res) => {
  const { default: forgetPassword } = await import(
    "./Controllers/forget-password/forget-password.js"
  );
  forgetPassword(req.body.email, res);
});

app.post("/checkResettingCode", async (req, res) => {
  const { default: checkResettingCode } = await import(
    "./Controllers/check-resetting-code/check-resetting-code.js"
  );
  checkResettingCode(req.body, res);
});

app.post("/setNewPassword", async (req, res) => {
  const { default: setNewPassword } = await import(
    "./Controllers/set-new-password/set-new-password.js"
  );
  setNewPassword(req.body, res);
});

app.get("/fetchRegisterRequests", async (req, res) => {
  const { default: fetchRegisterRequests } = await import(
    "./Controllers/fetch-register-requests/fetch-register-requests.js"
  );
  fetchRegisterRequests(res);
});

app.post("/handleRegisterRequests", async (req, res) => {
  const { default: handleRegisterRequests } = await import(
    "./Controllers/handle-register-requests/handle-register-requests.js"
  );
  handleRegisterRequests(req.body, res);
});
//admin crud
app.post("/createContributor", async (req, res) => {
  const { default: createContributor } = await import(
    "./Controllers/admin-crud/create-contributor.js"
  );
  createContributor(req.body, res);
});

app.post("/editContributor", async (req, res) => {
  const { default: editContributor } = await import(
    "./Controllers/admin-crud/edit-contributor.js"
  );
  editContributor(req.body, res);
});

app.post("/deleteContributor", async (req, res) => {
  const { default: deleteContributor } = await import(
    "./Controllers/admin-crud/delete-contributor.js"
  );
  deleteContributor(req.body.id, res);
});
// http://localhost:3001/confirmemail/${id}/${code}

app.post("/resend/:email", async (req, res) => {
  console.log(req.params.email);
  const [userData] = await db("users")
    .where("email", "=", req.params.email)
    .select("id", "email", "confirmed");
  if (userData.confirmed) {
    sendMail(userData.email, userData.confirmed, userData.id);
    res.send("true");
  } else {
    res.status(400).send("err");
  }
});

app.post("/confirmemail/:id/:code", async (req, res) => {
  const { id, code } = req.params;
  const arr = await db("users")
    .select("confirmed", "email")
    .where({ id, confirmed: code });
  const count = arr.length;
  if (count > 0) {
    await db("users").update({ confirmed: "" }).where({ id });
  }
  const text =
    "تم تأكيد حسابك الرجاء انتظار مراجعة المسؤول حتى تتمكن من تسجيل الدخول";
  sendMail(arr[0].email, null, null, text);
  res.send({ isConfirmed: count > 0 });
});

app.listen(process.env.PORT || 3001, () => {
  console.log("app is running on port 3001");
});
