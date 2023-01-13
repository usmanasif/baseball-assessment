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

module.exports = {
  readSheet
}
