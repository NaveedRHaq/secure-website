import sys

def fib(n):
    if n <= 1:
        return (n, 1)
    else:
        a, b = fib(n // 2)
        c = a * ((b << 1) - a)
        d = a * a + b * b
        if n & 1:
            return (d, c + d)
        else:
            return (c, d)

def fibonacci(n):
    return str(fib(n)[0])

def write_in_chunks(s, chunk_size):
    #Yield successive chunk_size-sized chunks from string s
    for i in range(0, len(s), chunk_size):
        yield s[i:i+chunk_size]

#nth fibonacci number you want to calculate
num = 1000000

sys.set_int_max_str_digits(1000000)  # This line is not standard in Python. If you're getting an error, consider removing it.
chunk_size = 120

with open("fibonacci.txt" , 'w') as f:
    f.write('fibonacci of ' +str(num)+':\n')
    fib_num_str = fibonacci(num)
    for chunk in write_in_chunks(fib_num_str, chunk_size):
        f.write(chunk + '\n')

