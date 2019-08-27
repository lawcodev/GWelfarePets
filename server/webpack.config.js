module.exports = {
  entry:  __dirname.replace('server','client') + '/index.js' ,
  out: {
    path: __dirname.replace('server','client') + '/public',
    filename: 'bundle.js'
  }
}