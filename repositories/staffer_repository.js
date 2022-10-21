class StafferRepository {
    // Create
    static addStaffer(name, email, status, section){
        // TODO: ADD SINGLE STAFFER
    };

    static addSection(name, category, logo){
        // TODO: ADD SINGLE SECTION
    };

    // Read
    static getAllStaffers(){
        // TODO: RETURN ALL STAFFERS
    }

    static getStaffer(id){
        // TODO: RETURN SPECIFIC STAFFER 
    }

    static getAllSections(){
        // TODO: RETURN ALL SECTIONS
    };

    static getSection(id){
        // TODO: RETURN SECTION
    };

    // Update
    static updateStafferName(id, name){
        // TODO: UPDATE STAFFER WITH STATUS CODE.
    };
    static updateStafferEmail(id, email){
        // TODO: UPDATE STAFFER EMAIL WITH STATUS CODE.
    };
    static updateStafferStatus(id, status){
        // TODO: UPDATE STAFFER STATUS WITH STATUS CODE.
    };
    static updateStafferSection(id, section){
        // TODO: UPDATE STAFFER SECTION WITH STATUS CODE.
    };
    static updateStafferYear(id, year){
        // TODO: UPDATE STAFFER ENTRY YEAR WITH STATUS CODE.
    };

    static updateSectionName(id, name){
        // TODO: UPDATE SECTION WITH STATUS CODE.  
    };
    static updateSectionCategory(id, name){
        // TODO: UPDATE SECTION CATEGORUY WITH STATUS CODE.
    };
    static updateSectionLogo(id, logo){
        // TODO: UPDATE SECTION LOGO WITH STATUS CODE.
    };

    // Delete
    static removeStaffer(id){
        // TODO: DELETE STAFFER WITH STATUS CODE.
    };
    static removeSection(id){
        // TODO: DELETE SECTION WITH STATUS CODE.
    };
};

export {StafferRepository};