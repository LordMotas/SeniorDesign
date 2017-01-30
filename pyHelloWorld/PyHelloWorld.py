"""import pygtk
pygtk.require("2.0")"""
import gi
gi.require_version('Gtk','3.0')
from gi.repository import Gtk
"""import gtk
import gtk.glade"""

class HelloWorldGTK:

	def __init__(self):
		self.gladefile = "PyHelloWorld.glade"
		self.glade = Gtk.Builder()
		self.glade.add_from_file(self.gladefile)
		self.glade.connect_signals(self)
		self.glade.get_object("MainWindow").show_all()

		self.window = self.glade.get_object("MainWindow")
		if (self.window):
			self.window.connect("destroy", Gtk.main_quit)
		dic = { "on_btnHelloWorld_clicked" : self.btnHelloWorld_clicked,
			"on_MainWindow_destroy" : Gtk.main_quit }
		self.glade.signal_autoconnect(dic)

	def btnHelloWorld_clicked(self, widget):
		print "Hello World!"

if __name__ == "__main__":
	try:
		a = HelloWorldGTK()
		Gtk.main()
	except KeyboardInterrupt:
		pass
