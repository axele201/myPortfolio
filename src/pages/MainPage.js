import HomePage from "./HomePage"
import AboutPage from "./AboutePage"
import SkillsPage from "./SkillsPage"
import ViewPort from "./ViewPort"
export default function MainPage(){
    return `
        ${HomePage()}
        ${AboutPage()}
        ${SkillsPage()}
        ${ViewPort()}
    `
}