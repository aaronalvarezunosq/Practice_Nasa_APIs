export class MainPage{
    
    getToDoMenuShopByDepartment(){
        cy.get('.hmenu-visible > :nth-child(6)');
    }
}

export const mainPage = new MainPage();