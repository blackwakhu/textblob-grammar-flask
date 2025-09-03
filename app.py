from flask import Flask, render_template, request
from textblob import Word, TextBlob
from flask_restful import Resource, Api, reqparse

app = Flask(__name__)
api = Api(app)

@app.route('/')
def homepage():
	return render_template('index.html')

@app.route('/dictionary')
def dictionary():
	return render_template('diction.html')

@app.route('/dictionary/meaning', methods=['GET','POST'])
def meaningDictionary():
	if request.method == 'POST':
		word_search = request.form.get('word')
		meaning = Word(word_search).definitions
	return render_template('diction.html', meaning=meaning)

@app.route('/spelling')
def spelling():
	return render_template('spell.html')

@app.route('/spelling/grammar', methods=['GET','POST'])
def grammar():
	if request.method == 'POST':
		wrong = request.form.get('word')
		correct = TextBlob(wrong).correct()
	return render_template('spell.html', correct=correct)

@app.route('/plural and singular')
def plural():
	return render_template('plurl.html')

@app.route('/plural and singular/plural', methods=['GET', 'POST'])
def plural1():
	if request.method == 'POST':
		sing = TextBlob(request.form.get('word'))
		plur = sing.words.pluralize()
	return render_template('plurl.html', plurals=f'the plural of {sing} is {plur[0]}')

@app.route('/plural and singular/singular', methods=['GET', 'POST'])
def singular():
	if request.method == 'POST':
		sing = TextBlob(request.form.get('word'))
		plur = sing.words.singularize()
	return render_template('plurl.html', singulars=f'the plural of {sing} is {plur[0]}')

@app.route("/oxford")
def oxford():
	return render_template('oxford.html')

@app.route("/hello")
def hello():
	return {"greet": "hello world"}

@api.resource("/meaning")
class Meaning(Resource):
	def post(self):
		return {"greet": "Hello world"}


if __name__ == '__main__':
	app()
