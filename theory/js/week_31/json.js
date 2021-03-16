JSON -> format data
--

// JSON text
var data = '{"result": [{"id": 1, "nama": "John"}]};'

// convert JSON text to JSON format (JS Object)
data = JSON.parse(data);
// Convert JSON format (JS Object) to JSON object
data = JSON.stringify(data);