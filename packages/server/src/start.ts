import server from "./index";

const defaultPortNumber = 3001;
const port = Number(process.env.PORT || defaultPortNumber);

server.listen(port, () => console.log(`Server running on port ${port}...`));
