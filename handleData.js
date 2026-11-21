import fs from "fs/promises";

const writeData = (data) => {
    const newData = JSON.stringify(data)
    fs.writeFile("./db/data.json", newData)
}

const readData = async () => {
    const data = await fs.readFile("./db/data.json")
    const newData = JSON.parse(data)
    console.log(newData)
}

export {
    writeData,
    readData
}