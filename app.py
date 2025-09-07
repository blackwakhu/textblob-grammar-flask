from flask import Flask, render_template, request
from textblob import Word, TextBlob
from flask_restful import Resource, Api, reqparse
import nltk

nltk.download('wordnet')

app = Flask(__name__)
api = Api(app)

@app.route("/")
def index():
	return render_template('index.html')

word = reqparse.RequestParser()
word.add_argument("word", type=str, help="Word to search", required=True)

@api.resource("/meaning")
class Meaning(Resource):
	def post(self):
		args = word.parse_args()
		return {
			"meaning": Word(args['word']).definitions,
		}
	
if __name__ == '__main__':
	app.run(host="0.0.0.0")
