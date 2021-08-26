from unittest import TestCase
from app import app

class convertTestCase(TestCase):
    def test_covert(self):
        with app.test_client() as client:
            data = {
                'currency-1': 'USD',
                'currency-2':'EUR',
                'amount':'1'}
            res = client.get('/convert', query_string = data)
            html = res.get_data(as_text=True)
            self.assertEqual(res.status_code, 200)
            self.assertIn("""<div class='output' id="convert-amt">$0.85</div>""", html)
            self.assertIn("""<div class='output'>$1-USD</div>""", html)
            self.assertIn("""<div class='output'>EUR</div>""", html)