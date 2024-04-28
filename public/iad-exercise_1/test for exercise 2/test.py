import serial
# from serial.tools import list_ports
# port = list(list_ports.comports())
# for p in port:
#     print(p.device)

ser = serial.Serial('/dev/cu.usbmodem144101', 9600, timeout=500)  # open serial port
ser.write(b'hello')     # write a string
# ser.close()             # close port
