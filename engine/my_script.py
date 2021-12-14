import sys
import argparse
# import random
# import time

from pythonosc import udp_client

speed = sys.stdin.readline()

def getValue(insert):
    i = int(insert)
    l = "You chose"
    x = l, i;
    if __name__ == "__main__":
        parser = argparse.ArgumentParser()
        parser.add_argument("--ip", default="127.0.0.1",
            help="The ip of the OSC server")
        parser.add_argument("--port", type=int, default=10000,
            help="The port the OSC server is listening on")
        args = parser.parse_args()

        client = udp_client.SimpleUDPClient(args.ip, args.port)

        client.send_message("/number", i)
    return x

print(getValue(speed))