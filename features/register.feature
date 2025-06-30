Feature: Registrar usuario

  Scenario:Registrar un usuario exitosamente

  Given Estoy en la página de registro
  When Lleno el formulario de registro con los siguientes datos
    | email | password | confirmPassword |
    | john.doe@example.com | 1234567890 | 1234567890 |
  Then El usuario es registrado correctamente

  Scenario: Registrar un usuario con contraseña no coincidente

  Given Estoy en la página de registro
  When Lleno el formulario de registro con los siguientes datos
    | email | password | confirmPassword |
    | john.doe@example.com | 1234567890 | 0987654321 |
  Then Se muestra un mensaje de error indicando que las contraseñas no coinciden

  Scenario: Registrar un usuario con contraseña no válida

  Given Estoy en la página de registro
  When Lleno el formulario de registro con los siguientes datos
    | email | password | confirmPassword |
    | john.doe@example.com | 1234 | 1234 |
  Then Se muestra un mensaje de error indicando que la contraseña no es válida
