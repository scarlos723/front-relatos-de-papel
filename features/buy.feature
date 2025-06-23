Feature: Comprar un libro

  Scenario Outline: Comprar un libro exitosamente

    Given Estoy en la pagina de catalogo
    When Busco el libro Harry
    And Hago clic en el primer libro de la lista
    And Agrego el libro al carrito de compras
    And Voy al carrito de compras
    And Hago clic en el boton de pagar
    And Lleno el formulario de pago con los siguientes datos
      | name | phone | email | country | city | address |
      | John Doe | 1234567890 | test@gmail.com | USA | New York | 123 Main St |
    And Confirmo el pago
    Then Veo un mensaje de confirmación de compra
