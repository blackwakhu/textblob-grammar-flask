from flask import Flask, render_template, request
from textblob import Word, TextBlob
from flask_restful import Resource, Api, reqparse

app = Flask(__name__)
api = Api(app)

# @app.route('/spelling/grammar', methods=['GET','POST'])
# def grammar():
# 	if request.method == 'POST':
# 		wrong = request.form.get('word')
# 		correct = TextBlob(wrong).correct()
# 	return render_template('spell.html', correct=correct)

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
	app()
