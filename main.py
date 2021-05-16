import requests
data = requests.get("http://localhost:3000/api")
json = data.json()
if json != []:
    for i in range(0, len(json)):
        print("Comment: " + json[i]['message'])