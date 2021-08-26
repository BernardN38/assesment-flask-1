from forex_python.converter import CurrencyRates
from flask import Flask, render_template, request, session, redirect,flash

app = Flask(__name__)
c = CurrencyRates()

app.secret_key = 'supersecretkey'

@app.route('/')
def homepage():
    currency_1 = session.get('currency_1',"USD")
    currency_2 = session.get('currency_2', "EUR")
    amount = session.get('amount', 0)
    exchange = session.get('exchange', 0)
    return render_template('main.html',currency_1=currency_1,currency_2=currency_2, amount=amount,exchange=exchange)

@app.route('/convert')
def calculate_exchange():
    currency_1 = request.args.get('currency-1').upper()
    currency_2 = request.args.get('currency-2').upper()
    amount = request.args.get('amount')
    rate = 0
    try:
        rate = c.convert(currency_1,currency_2,int(amount))
        return render_template('display.html',currency_1=currency_1,currency_2=currency_2, amount=amount,exchange=round(rate,2))
    except:
        flash('Unsupported currency')
        return redirect('/')


