const exceljs = require('exceljs')

const readSheet = async name => {
  const data = []
  const workbook = new exceljs.Workbook()

  await workbook.xlsx.readFile(name)
  const worksheet = await workbook.getWorksheet(1)

  const keys = worksheet.getRow(1).values
  worksheet.eachRow(row => {
    const obj = {}
    row.values.map((val, idx) => {
      obj[keys[idx]] = val
      return obj
    })
    data.push(obj)
  })

  data.splice(0, 1)
  return data
}

const writeToFile = async (name, playerData) => {
  const data = await readSheet(name)

  const rowNumber = getRowNumber(data, playerData[0])
  const workbook = new exceljs.Workbook()

  await workbook.xlsx.readFile(name)
  const worksheet = await workbook.getWorksheet(1)

  const rowInserted = worksheet.insertRow(rowNumber, playerData)
  rowInserted.commit()
  return workbook.xlsx.writeFile(name)
}

const getRowNumber = (data, id) => {
  const ids = data.map(val => val.PlayerId)

  const lastIdx = ids.lastIndexOf(id)
  if (lastIdx > 0)
    return lastIdx + 3
  else {
    const nextIndex = ids.findIndex(val => (val > id))
    return nextIndex >= 0 ? nextIndex + 2 : ids.length + 2
  }
}

module.exports = {
  readSheet,
  writeToFile
}
