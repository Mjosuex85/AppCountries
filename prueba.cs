public static decimal ConvertirNumero(decimal numero)
    {
        string numeroTexto = numero.ToString("0.######");

        if (numeroTexto.Contains(",") && !numeroTexto.EndsWith("0"))
        {
            int posicionComa = numeroTexto.IndexOf(",");
            numeroTexto = numeroTexto.Substring(0, posicionComa + 4); // Tomamos hasta 3 decimales después de la coma
        }

        return decimal.Parse(numeroTexto);
    }
