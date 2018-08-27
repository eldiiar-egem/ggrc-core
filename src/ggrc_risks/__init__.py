# Copyright (C) 2018 Google Inc.
# Licensed under http://www.apache.org/licenses/LICENSE-2.0 <see LICENSE file>

"""Risk module"""

from flask import Blueprint

# Initialize signal handler for status changes
from blinker import Namespace
signals = Namespace()
# Initialize Flask Blueprint for extension
blueprint = Blueprint(
    'ggrc_risks',
    __name__,
    template_folder='templates',
    static_folder='static',
    static_url_path='/static/ggrc_risks',
)
