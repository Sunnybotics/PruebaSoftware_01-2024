from django.db import models

"""
Modelo de Django para la creación de tabla en base de datos que
guarde el dataset de fecha y valor propuesto
"""


class DataItem(models.Model):
    fecha = models.DateField()
    valor = models.DecimalField(max_digits=3, decimal_places=1)

    def __str__(self):
        return f"{self.fecha} - {self.valor}"
