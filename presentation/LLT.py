import time

def LLT(p):
    s = 4
    M = 2**p - 1
    for i in range(0, p-2):
        s = ((s*s) - 2) % M
    return (s == 0)

def timeLLT(p):
    before = time.time()
    result = LLT(p)
    return { "elapsed": time.time()-before, "result": result}

def test():
    vals = [2, 3, 5, 7, 13, 17, 19, 31, 61, 89, 107, 127, 521, 607, 1279, 2203, 2281, 3217, 4253, 4423, 9689, 9941, 11213, 19937, 21701, 23209, 44497, 86243]
    for i in vals:
        t = timeLLT(i)
        print "{0} {1}".format(i, t["elapsed"])


if __name__ == '__main__':
   test()
