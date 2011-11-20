import time
import sys
from multiprocessing import Process, Queue, Pool
import Queue

def is_prime(n):
    for i in range(2, int(n**0.5)):
        if n % i == 0:
            return False
    return True

def LLTest(p):
    s = 4
    M = 2**p - 1
    for i in range(0, p-2):
        s = ((s*s) - 2) % M
    return (s == 0)

def timeLLT(p):
    before = time.time()
    result = LLTest(p)
    return { "p": p, "elapsed": time.time()-before, "result": result}

if __name__ == '__main__':
    primes = []
    try:
        num_threads = int(sys.argv[1])
    except:
        num_threads = 8
    try:
        max_prime = int(sys.argv[2])
    except:
        max_prime = 1000
    for i in range(1,max_prime,2):
       if is_prime(i):
           primes.append(i)
    p = Pool(num_threads)
    res = p.map_async(timeLLT, primes)
    p.close()
    p.join()
    for i in res.get():
        print "{0} {1} {2}".format(i["p"], i["elapsed"], i["result"])

